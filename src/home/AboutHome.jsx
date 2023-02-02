import React from "react";

const AboutHome = () => {
  return (
    <>
      <section className="container mx-auto px-6 p-10 w-11/12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Artoo!
        </h2>

        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2 ">
            <img
              className="rounded-lg"
              src="https://www.thesun.co.uk/wp-content/uploads/2019/06/SWJFO-EAPlay-08-1.jpg"
              alt="use the force"
            />
          </div>
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              About QnQ Healthcare
            </h4>
            <p className="text-gray-600 mb-8">
              QnQ Pharmacy (A Unit of QnQ Healthcare Pvt Ltd) is a Novel Retail
              Unit for Quality Assured Generic Drugs. Our vision is to provide
              Quality assured generic medicines to People at an affordable
              price. As we all know, An Average family spends sixty percent of
              its Income and savings in healthcare expenditure for medicines and
              healthcare consumables. Despite best efforts from doctors and
              hospital managements to ensure purchase of quality medicines for
              patient care, we are aware of the CDSCO 2016 Report showing
              evidence of spurious and counterfeit medicines in the Indian drug
              market, even amongst branded medicines. In order to ensure the
              quality of medicines at the point of sale to patients, QnQ
              healthcare performs Drug quality testing of all batches of
              medicines (Active Pharmaceutical Ingredient assay & quantity,
              disintegration, sterility, etc) in a Reputed NABL accredited third
              party drug testing lab. Hence, we ensure supply of Quality assured
              generic medicines to the public.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Artoo expresses
          </h2>
          <div className="flex flex-wrap">
            <div className="w-full h-auto md:w-1/3 px-2 mb-4">
              <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">
                  How are you feeling, kid? You don't look so bad to me. In
                  fact, you look strong enough to pull the ears off a Gundark.
                  Thanks to you.
                </p>
                <p className="text-gray-500 text-xs md:text-sm px-6">
                  Luke Skywalker
                </p>
              </div>
            </div>

            <div className="w-full h-auto md:w-1/3 px-2 mb-4">
              <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">
                  That's two you owe me, junior. Well your Worship, looks like
                  you managed to keep me around for a little while longer. I had
                  nothing to do with it.
                </p>
                <p className="text-gray-500 text-xs md:text-sm px-6">
                  Emperor's Royal Guards
                </p>
              </div>
            </div>

            <div className="w-full h-auto md:w-1/3 px-2 mb-4">
              <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">
                  General Rieekan thinks it's dangerous for any ships to leave
                  the system until we've activated the energy shield. That's a
                  good story. I think you just can't bear to let a gorgeous guy
                  like me out of your sight
                </p>
                <p className="text-gray-500 text-xs md:text-sm px-6">
                  Queen Mother Ta'a Chume
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHome;
