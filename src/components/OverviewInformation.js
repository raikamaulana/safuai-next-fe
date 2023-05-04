import Image from "next/image";
import { useTheme } from "next-themes";

export const OverviewInformation = () => {
  const { theme } = useTheme();
  const greenEllipse =
    theme === "dark"
      ? "/images/ellipse-green.png"
      : "/images/ellipse-green-light.png";
  const redEllipse =
    theme === "dark"
      ? "/images/ellipse-red.png"
      : "/images/ellipse-red-light.png";
  return (
    <div className="bg-customWhite dark:bg-customBlack min-h-screen overflow-hidden">
      <div className="flex justify-center">
        <div className="bg-white dark:bg-customDarkComp max-w-4xl p-5 rounded-sm">
          <div className="relative overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead className="font-poppins text-customPurple uppercase">
                <tr>
                  <th className="px-7 py-3">Notes</th>
                  <th className="px-7 py-3">Name</th>
                  <th className="px-7 py-3">Analysis</th>
                </tr>
              </thead>
              <tbody className="dark:text-white font-poppins">
                <tr className="dark:bg-customDarkTr dark:border-b-8 border-2 border-custombg-customWhite dark:border-none dark:border-customGrey2 rounded-lg mb-3">
                  <td className="border-2 border-custombg-customWhite border-r-0 dark:border-none px-7 py-3">
                    <Image
                      src={greenEllipse}
                      alt=""
                      width={17}
                      height={17}
                      className="mx-auto"
                    />
                  </td>
                  <td className="border-2 border-custombg-customWhite border-x-0 dark:border-none px-7 py-3">
                    Minting
                  </td>
                  <td className="border-2 border-custombg-customWhite border-l-0 dark:border-none px-7 py-3">
                    No mint function found
                  </td>
                </tr>
                <tr className="dark:bg-customDarkTr dark:border-b-8 border-2 border-custombg-customWhite dark:border-none dark:border-customGrey2 rounded-lg mb-3">
                  <td className="border-2 border-custombg-customWhite border-r-0 dark:border-none px-7 py-3">
                    <Image
                      src={greenEllipse}
                      alt=""
                      width={17}
                      height={17}
                      className="mx-auto"
                    />
                  </td>
                  <td className="border-2 border-custombg-customWhite border-x-0 dark:border-none px-7 py-3">
                    Honeypot
                  </td>
                  <td className="border-2 border-custombg-customWhite border-l-0 dark:border-none px-7 py-3">
                    Liquidity has not been added
                  </td>
                </tr>
                <tr className="dark:bg-customDarkTr dark:border-b-8 border-2 border-custombg-customWhite dark:border-none dark:border-customGrey2 rounded-lg mb-3">
                  <td className="border-2 border-custombg-customWhite border-r-0 dark:border-none px-7 py-3">
                    <Image
                      src={greenEllipse}
                      alt=""
                      width={17}
                      height={17}
                      className="mx-auto"
                    />
                  </td>
                  <td className="border-2 border-custombg-customWhite border-x-0 dark:border-none px-7 py-3">
                    Modify Fees Buy
                  </td>
                  <td className="border-2 border-custombg-customWhite border-l-0 dark:border-none px-7 py-3">
                    The Owner can't set buy fees
                  </td>
                </tr>
                <tr className="dark:bg-customDarkTr dark:border-b-8 border-2 border-custombg-customWhite dark:border-none dark:border-customGrey2 rounded-lg mb-3">
                  <td className="border-2 border-custombg-customWhite border-r-0 dark:border-none px-7 py-3">
                    <Image
                      src={greenEllipse}
                      alt=""
                      width={17}
                      height={17}
                      className="mx-auto"
                    />
                  </td>
                  <td className="border-2 border-custombg-customWhite border-x-0 dark:border-none px-7 py-3">
                    Proxy
                  </td>
                  <td className="border-2 border-custombg-customWhite border-l-0 dark:border-none px-7 py-3">
                    Proxy Contract Not Detected
                  </td>
                </tr>
                <tr className="dark:bg-customDarkTr dark:border-b-8 border-2 border-custombg-customWhite dark:border-none dark:border-customGrey2 rounded-lg mb-3">
                  <td className="border-2 border-custombg-customWhite border-r-0 dark:border-none px-7 py-3">
                    <Image
                      src={greenEllipse}
                      alt=""
                      width={17}
                      height={17}
                      className="mx-auto"
                    />
                  </td>
                  <td className="border-2 border-custombg-customWhite border-x-0 dark:border-none px-7 py-3">
                    Anti Whale
                  </td>
                  <td className="border-2 border-custombg-customWhite border-l-0 dark:border-none px-7 py-3">
                    Not Detected
                  </td>
                </tr>
                <tr className="dark:bg-customDarkTr dark:border-b-8 border-2 border-custombg-customWhite dark:border-none dark:border-customGrey2 rounded-lg mb-3">
                  <td className="border-2 border-custombg-customWhite border-r-0 dark:border-none px-7 py-3">
                    <Image
                      src={greenEllipse}
                      alt=""
                      width={17}
                      height={17}
                      className="mx-auto"
                    />
                  </td>
                  <td className="border-2 border-custombg-customWhite border-x-0 dark:border-none px-7 py-3">
                    Trading Couldown
                  </td>
                  <td className="border-2 border-custombg-customWhite border-l-0 dark:border-none px-7 py-3">
                    The owner can not set time selling interval
                  </td>
                </tr>
                <tr className="dark:bg-customDarkTr dark:border-b-8 border-2 border-custombg-customWhite dark:border-none dark:border-customGrey2 rounded-lg mb-3">
                  <td className="border-2 border-custombg-customWhite border-r-0 dark:border-none px-7 py-3">
                    <Image
                      src={greenEllipse}
                      alt=""
                      width={17}
                      height={17}
                      className="mx-auto"
                    />
                  </td>
                  <td className="border-2 border-custombg-customWhite border-x-0 dark:border-none px-7 py-3">
                    Owner Change Balance
                  </td>
                  <td className="border-2 border-custombg-customWhite border-l-0 dark:border-none px-7 py-3">
                    The owner can not change balance address
                  </td>
                </tr>
                <tr className="dark:bg-customDarkTr dark:border-b-8 border-2 border-custombg-customWhite dark:border-none dark:border-customGrey2 rounded-lg mb-3">
                  <td className="border-2 border-custombg-customWhite border-r-0 dark:border-none px-7 py-3">
                    <Image
                      src={greenEllipse}
                      alt=""
                      width={17}
                      height={17}
                      className="mx-auto"
                    />
                  </td>
                  <td className="border-2 border-custombg-customWhite border-x-0 dark:border-none px-7 py-3">
                    Cannot Sell All
                  </td>
                  <td className="border-2 border-custombg-customWhite border-l-0 dark:border-none px-7 py-3">
                    Liquidity has not been added
                  </td>
                </tr>
                <tr className="dark:bg-customDarkTr dark:border-b-8 border-2 border-custombg-customWhite dark:border-none dark:border-customGrey2 rounded-lg mb-3">
                  <td className="border-2 border-custombg-customWhite border-r-0 dark:border-none px-7 py-3">
                    <Image
                      src={greenEllipse}
                      alt=""
                      width={17}
                      height={17}
                      className="mx-auto"
                    />
                  </td>
                  <td className="border-2 border-custombg-customWhite border-x-0 dark:border-none px-7 py-3">
                    Self Destruct
                  </td>
                  <td className="border-2 border-custombg-customWhite border-l-0 dark:border-none px-7 py-3">
                    Not Detected
                  </td>
                </tr>
                <tr className="dark:bg-customDarkTr dark:border-b-8 border-2 border-custombg-customWhite dark:border-none dark:border-customGrey2 rounded-lg mb-3">
                  <td className="border-2 border-custombg-customWhite border-r-0 dark:border-none px-7 py-3">
                    <Image
                      src={greenEllipse}
                      alt=""
                      width={17}
                      height={17}
                      className="mx-auto"
                    />
                  </td>
                  <td className="border-2 border-custombg-customWhite border-x-0 dark:border-none px-7 py-3">
                    Anti Bot
                  </td>
                  <td className="border-2 border-custombg-customWhite border-l-0 dark:border-none px-7 py-3">
                    Not Detected
                  </td>
                </tr>
                <tr className="dark:bg-customDarkTr dark:border-b-8 border-2 border-custombg-customWhite dark:border-none dark:border-customGrey2 rounded-lg mb-3">
                  <td className="border-2 border-custombg-customWhite border-r-0 dark:border-none px-7 py-3">
                    <Image
                      src={redEllipse}
                      alt=""
                      width={17}
                      height={17}
                      className="mx-auto"
                    />
                  </td>
                  <td className="border-2 border-custombg-customWhite border-x-0 dark:border-none px-7 py-3">
                    Blacklist
                  </td>
                  <td className="border-2 border-custombg-customWhite border-l-0 dark:border-none px-7 py-3">
                    The owner can not set blacklist
                  </td>
                </tr>
                <tr className="dark:bg-customDarkTr dark:border-b-8 border-2 border-custombg-customWhite dark:border-none dark:border-customGrey2 rounded-lg mb-3">
                  <td className="border-2 border-custombg-customWhite border-r-0 dark:border-none px-7 py-3">
                    <Image
                      src={greenEllipse}
                      alt=""
                      width={17}
                      height={17}
                      className="mx-auto"
                    />
                  </td>
                  <td className="border-2 border-custombg-customWhite border-x-0 dark:border-none px-7 py-3">
                    Can Take Back Ownership
                  </td>
                  <td className="border-2 border-custombg-customWhite border-l-0 dark:border-none px-7 py-3">
                    The owner can not take back ownership
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
