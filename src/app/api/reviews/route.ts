import { NextResponse } from 'next/server';

export async function GET() {
  // In a real production scenario, this endpoint would connect to the 
  // Google My Business / Google Places API using a secure server-side key
  // and fetch the actual live 5-star reviews.
  
  // Example Google Places fetch (commented out):
  /*
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
  const PLACE_ID = process.env.GOOGLE_PLACE_ID;
  const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`);
  const data = await response.json();
  const reviews = data.result.reviews;
  */

  const mockReviews = [
    {
      author_name: "Rahul Deshmukh",
      rating: 5,
      text: "Excellent plotted development by K Raheja Corp. The infrastructure quality is top-notch and the views of the Sahyadris are breathtaking. A very secure investment for the future.",
      time: 1718042400,
      profile_photo_url: "https://lh3.googleusercontent.com/a/default-user"
    },
    {
      author_name: "Sneha Patil",
      rating: 5,
      text: "We bought a 3000 sq ft plot here. The process was completely transparent, and the MahaRERA compliance gave us peace of mind. The upcoming clubhouse looks amazing.",
      time: 1715424400,
      profile_photo_url: "https://lh3.googleusercontent.com/a/default-user"
    },
    {
      author_name: "Amit Kulkarni",
      rating: 5,
      text: "Perfect location for a weekend home. Just 15 mins from Chandani Chowk but feels like a hill station. The appreciation we've seen since last year is fantastic.",
      time: 1712424400,
      profile_photo_url: "https://lh3.googleusercontent.com/a/default-user"
    },
    {
      author_name: "Priya Sharma",
      rating: 5,
      text: "Highly professional sales team. They explained the NA conversion details clearly. The title is 100% clear. Best gated community in Pirangut area.",
      time: 1708424400,
      profile_photo_url: "https://lh3.googleusercontent.com/a/default-user"
    },
    {
      author_name: "Vikram Joshi",
      rating: 5,
      text: "The massive land parcel and low-density planning make Viva stand out from other projects. Great ROI potential given the new Hinjawadi infra developments.",
      time: 1705424400,
      profile_photo_url: "https://lh3.googleusercontent.com/a/default-user"
    }
  ];

  return NextResponse.json({
    success: true,
    data: mockReviews
  }, {
    headers: {
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200', // Cache for 1 day
    }
  });
}
