import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Allow all requests
  return NextResponse.next();
}

