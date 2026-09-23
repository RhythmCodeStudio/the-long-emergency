// import components
import ShowRequestForm from "@/ui/show-request-form";
export default function RequestAShowPage() {
  return (
    <div className="flex flex-col mx-auto w-full max-w-2xl p-4">
      <h3 className="text-2xl font-semibold mb-4 text-center">Request a Show</h3>
      <p>We'll play just about anywhere. Wanna have us play in your basement, your living room, or wherever? Let's make it happen! Fill out the form below to request a show.</p>
      {/* Add your form components here */}
      <ShowRequestForm />
    </div>
  );
}