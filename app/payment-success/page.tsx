export default function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  return (
    <main className="p-12 text-white text-center border border-black m-10 rounded-md bg-gradient-to-tr from-blue-500 to-blue-900 ">
      <div className="">
        {/* <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1> */}
        <h2 className="text-2xl">Thank you for your order.</h2>
        <p>Check your email for confirmation and downloads.</p>

        {/* <div className="bg-white p-2 rounded-md 0 mt-5 text-4xl font-bold">
          ${amount}
        </div> */}
      </div>
    </main>
  );
}