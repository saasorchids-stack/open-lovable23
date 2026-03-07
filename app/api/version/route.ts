import { NextResponse } from 'next/server';

// Build timestamp baked in at build time
const BUILD_VERSION = '2025-07-12-v3';
const BUILD_TIMESTAMP = new Date().toISOString();

export async function GET() {
  return NextResponse.json({
    version: BUILD_VERSION,
    built: BUILD_TIMESTAMP,
    model: 'google/gemini-2.0-flash',
    aiSdkVersion: '5.0.8',
    timeout: '50s abort + retry',
    hasGeminiKey: !!process.env.GEMINI_API_KEY,
  });
}
