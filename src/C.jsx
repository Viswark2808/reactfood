import React from 'react';

const C = () => {
  // Define an array of customer reviews
  const customerReviews = [
    {
      id: 1,
      quote: "The best restaurant",
      content:
        "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
      author: "Sophire Robson",
      location: "Los Angeles, CA",
      image: "/icons/p1.png",
    },
    {
      id: 2,
      quote: "Simply delicious",
      content:
        "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
      author: "Matt Cannon",
      location: "San Diego, CA",
      image: "/icons/p2.png",
    },
    {
      id: 3,
      quote: "One of a kind restaurant",
      content:
        "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
      author: "Andy Smith",
      location: "San Francisco, CA",
      image: "/icons/p3.png",
    },
  ];

  return (
    <div>
      <div>
        <p className="text-[55px] mt-[5rem] ml-[26rem]">What Our Customers Say</p>

        <div className="flex mt-[3rem] ml-[5rem] gap-[2.5rem] ">
          {customerReviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#F9F9F7] w-[416px] h-[408px] rounded-3xl"
            >
              <p className="text-[red] text-[24px] pt-[3rem] pl-[2rem]">
                {review.quote}
              </p>
              <p className=" text-[20px] pt-[2rem] pl-[2rem]">
                {review.content}
              </p>
              <p className="absolute pl-[7.6rem] pt-[3.7rem] text-[16px]">
                {review.author}
              </p>
              <p className="absolute pl-[7.6rem] pt-[5.4rem] text-[14px]">
                {review.location}
              </p>
              <img
                src={review.image}
                alt="profile"
                className="mt-[3rem] ml-[2rem]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default C;
