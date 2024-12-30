import Button from "./Button";
const Container = () => {
    return ( 
        <div className="h-10 bg-slate-200">
        <table className="w-[78%] bg-white mx-auto rounded-xl border-b-[2px] ">
          <thead>
            <tr className="opacity-50 border-b text-left">
              <th className="px-3 py-2 text-sm tracking-wide">STATUS</th>
              <th className="px-3 py-2 text-sm tracking-wide">DETAILS</th>
              <th className="px-3 py-2 text-sm tracking-wide">ADDITIONAL/ACTIONS</th>
              
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2 font-medium text-sm tracking-wide marker:text-red-500 pl-6"><li>Authorized</li></td>
              <td className="px-4 py-2 font-medium text-sm tracking-wide opacity-50">$120.80 - 26 December - 09:30PM </td>
              <td className="px-4 py-2 font-medium text-sm tracking-wide"><Button>Submit for Payment</Button></td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-medium text-sm marker:text-yellow-500 pl-6"><li>Pending</li></td>
              <td className="px-4 py-2 font-medium text-sm opacity-50">$10.80 - 26 December - 09:30AM </td>
              <td className="px-4 py-2 font-medium text-sm"><span className="opacity-50">Approx.to approve:</span>1 business day</td>
            </tr>
          </tbody>
        </table>
      </div>
     );
}
 
export default Container;