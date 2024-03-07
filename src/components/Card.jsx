import { React } from "react";
import { useState } from "react";

const Button = ({ onClick, value }) => {
  
  return (
    <button
      className="px-6 py-3 rounded-full bg-gunmetal text-white active:bg-pumpkin hover:bg-slate-gray shadow-2xl"
      type="button" onClick={onClick}
    >
      {value}
    </button>
  );
};


export default function Card() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleRatingClicked(rating) {
    setSelectedRating(rating)
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }
  
    return (
            <>
              {isSubmitted ? (
                <div className="text-white h-screen flex justify-center items-center">
                  <div
                    className="px-5 py-8 w-[390px] rounded-3xl bg-raisin-black font-overpass flex justify-center items-center flex-col text-center"
                    >
                      <img src="images/illustration-thank-you.svg" alt="receipt-icon" className="mt-3"/>

                      <div className="py-1 px-4 bg-gunmetal rounded-full text-pumpkin mt-7 text-sm">You selected {selectedRating} out of 5</div>

                      <div className="mt-7 text-2xl font-semibold">Thank you!</div>

                      <div className="mt-3 text-slate-gray">We appreciate you taking the time to give a rating.  If you ever need more support, don't hesitate to get in touch!</div>
                    </div>
                </div>
              ) : (
              
                <form onSubmit={handleSubmit} className="h-screen flex justify-center items-center">
                    <div
                    className="px-5 py-8 w-[390px] rounded-3xl bg-raisin-black font-overpass"
                    >
                   
                    <img
                        src="images/icon-star.svg"
                        alt="star-icon"
                        className="bg-gunmetal p-4 rounded-full ml-1 shadow-2xl"
                    />
                 
                    <h1 className="text-white text-2xl font-semibold pt-6 pb-3">
                        How did we do?
                    </h1>
                  
                    <div className="text-slate-gray pb-6">
                        Please let us know how we did with your support request. All
                        feedback is appreciated to help us improve our offering!
                    </div>
                 
                    <div className="flex flex-row gap-4 justify-between items-center">
                        {
                            [1, 2, 3, 4, 5].map((rating) => (
                                <Button onClick={() => handleRatingClicked(rating)} value={rating}/>
                            ))
                        }
                    </div>
                    <div className="flex justify-center items-center pt-6">
                        <button
                            disabled={selectedRating === undefined}
                            className="py-2 bg-pumpkin rounded-3xl font-semibold text-white w-full hover:bg-white hover:text-pumpkin shadow-2xl"
                            type="submit"
                        >
                        SUBMIT
                        </button>
                    </div>
                    </div>
                </form>
              )};
            </>
    );
};
