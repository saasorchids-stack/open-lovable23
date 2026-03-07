import { NextResponse } from 'next/server';

// Build timestamp baked in at build time
const BUILD_VERSION = '2025-07-12-v3';
const BUILD_TIMESTAMP = new Date().toISOString();

export async function GET() {
  const geminiKey = (process.env.GEMINI_API_KEY || '').trim();
  const firecrawlKey = (process.env.FIRECRAWL_API_KEY || '').trim();
  return NextResponse.json({
    version: BUILD_VERSION,
    built: BUILD_TIMESTAMP,
    model: 'google/gemini-2.0-flash',
    aiSdkVersion: '5.0.8',
    timeout: '50s abort + retry',
    hasGeminiKey: geminiKey.length > 0,
    geminiKeyPrefix: geminiKey.substring(0, 8) + '...',
    hasFirecrawlKey: firecrawlKey.length > 0,
    sandboxProvider: process.env.SANDBOX_PROVIDER || 'not set',
  });
}
