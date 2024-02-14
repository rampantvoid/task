const Footer = () => {
  return (
    <>
      <div className="bg-[#ced4da] p-4 flex min-h-[30vh]">
        <div className="flex flex-col mx-[10%] w-full items-center gap-10">
          <p className="font-bold">Back to top</p>
          <div className="flex justify-evenly w-full flex-col gap-10 lg:flex-row">
            <div className="flex flex-col gap-2">
              <p className="font-bold">Get to know us</p>
              <div className="flex flex-col">
                <ul>
                  <li>About us</li>
                  <li>Carrers</li>
                  <li>Press release</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-bold">Connect with us</p>
              <div className="flex flex-col">
                <ul>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-bold">Make Money with Us</p>
              <div className="flex flex-col">
                <ul>
                  <li>Sell on GroupDeals</li>
                  <li>Sell under GroupDeals Accelerator</li>
                  <li>GroupDeals Global Selling</li>
                  <li>Become an Affiliate</li>
                  <li>Fullfilment by GroupDeals</li>
                  <li>Adevertise your Products</li>
                  <li>Epay on Merchants</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Let Us Help You</p>
              <div className="flex flex-col">
                <ul>
                  <li>COVID-19 and GroupDeals</li>
                  <li>Your Account</li>
                  <li>Return Center</li>
                  <li>100% Purchase Protection</li>
                  <li>GroupDeals App Download</li>
                  <li>Group Assistant Download</li>
                  <li>Help</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black p-4 flex flex-col items-center text-white">
        <p className="text-center">
          Contitions of Use & Sale, Privacy Notice, Interest-Based Ads
        </p>
        <p>&#169;2022, groupbasket.com</p>
      </div>
    </>
  );
};

export default Footer;
