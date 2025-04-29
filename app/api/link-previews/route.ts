import { NextRequest, NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import { Metadata } from '@/types/metadata';

const fetchMetadata = async (data: string, url: string): Promise<Metadata> => {
  const $ = cheerio.load(data);

  return {
    url,
    twitter: {
      card: $('meta[name="twitter:card"]').attr('content'),
      image: $('meta[name="twitter:image"]').attr('content'),
      title: $('meta[name="twitter:title"]').attr('content'),
      description: $('meta[name="twitter:description"]').attr('content')
    },
    openGraph: {
      image: $('meta[property="og:image"]').attr('content'),
      title: $('meta[property="og:title"]').attr('content'),
      description: $('meta[property="og:description"]').attr('content')
    }
  };
};

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    let url_ = url;

    if (url.startsWith('http://')) {
      url_ = `https://${url.replace('http://', '')}`;
    } else if (!url.startsWith('https://')) {
      url_ = `https://${url}`;
    }

    const response = await fetch(url_, {
      method: 'GET'
    });
    const data = await response.text();

    const metadata = await fetchMetadata(data, url_);

    return NextResponse.json({ success: true, metadata });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: err });
  }
}
