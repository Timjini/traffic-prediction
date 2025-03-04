import { NextResponse } from "next/server";
import axios from "axios";
import { createMocks } from 'node-mocks-http';
import { POST } from './route'; // Import your route handler

jest.mock('axios'); // Mock Axios

describe('API Route /api/route', () => {
  it('should return the mocked Google API response data', async () => {
    // Mock Google API response
    const mockGoogleApiResponse = {
      routes: [{
        legs: [{
          distance: { text: '10 km' },
          duration: { text: '15 mins' },
        }],
      }],
    };

    // Mock axios.get to return the mock response
    axios.get.mockResolvedValue({ data: mockGoogleApiResponse });

    // Prepare the mock request data
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        origin: '52.5200,13.4050',
        destination: '52.5210,13.4130',
        waypoints: '52.5163,13.3777|52.5250,13.3694',
        departureTime: '1741361601',
        mode: 'driving',
      },
    });

    // Call your POST handler
    await POST(req, res);

    // Verify the response
    const responseData = res._getData();
    expect(responseData).toHaveProperty('routes');
    expect(responseData.routes[0].legs[0]).toHaveProperty('distance');
    expect(responseData.routes[0].legs[0].distance.text).toBe('10 km');
    expect(responseData.routes[0].legs[0].duration.text).toBe('15 mins');
  });
});
