import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // Clear the token cookie
    const response = NextResponse.json({ message: 'Logged out successfully' });
    response.cookies.set('token', '', {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      expires: new Date(0), // Set cookie expiration to a past date
    });

    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
