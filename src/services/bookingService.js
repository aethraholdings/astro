const API_URL =
  "http://localhost:5000/api/bookings";


// =====================================
// CREATE BOOKING
// =====================================

export async function createBooking(
  bookingData,
  token
) {
  const response = await fetch(
    API_URL,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",

        Authorization:
          `Bearer ${token}`,
      },

      body: JSON.stringify(
        bookingData
      ),
    }
  );


  const data =
    await response.json();


  if (!response.ok) {
    throw new Error(
      data.message ||
      "Unable to create booking."
    );
  }


  return data;
}


// =====================================
// GET MY BOOKINGS
// =====================================

export async function getMyBookings(
  token
) {
  const response = await fetch(
    `${API_URL}/my`,
    {
      method: "GET",

      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    }
  );


  const data =
    await response.json();


  if (!response.ok) {
    throw new Error(
      data.message ||
      "Unable to get bookings."
    );
  }


  return data;
}


// =====================================
// GET SINGLE BOOKING
// =====================================

export async function getBooking(
  id,
  token
) {
  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "GET",

      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    }
  );


  const data =
    await response.json();


  if (!response.ok) {
    throw new Error(
      data.message ||
      "Unable to get booking."
    );
  }


  return data;
}