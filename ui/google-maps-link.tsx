type GoogleMapsLinkProps = {
  addressLineOne: string;
  addressLineTwo?: string;
  city: string;
  state: string;
  zipCode: number;
  text?: string;
  className?: string;
  title?: string
};

export default function GoogleMapsLink({
  addressLineOne,
  addressLineTwo,
  city,
  state,
  zipCode,
  text,
  className,
  title
}: GoogleMapsLinkProps) {
  return (
    <div>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          addressLineOne
        )}${addressLineTwo ? `,${encodeURIComponent(addressLineTwo)}` : ''},${encodeURIComponent(
          city
        )},${encodeURIComponent(state)},${zipCode}`}
        target="_blank"
        rel="noopener noreferrer"
        className={className || "text-blue-600 underline"}
        title={`Get directions to ${addressLineOne}`}
      >
        {text ? (
          <span>{text}</span>
        ) : (
          <>
            <p>{addressLineOne}</p>
            <p>{addressLineTwo}</p>
            <p>
              {city}, {state}
            </p>
            <p>{zipCode}</p>
          </>
        )}
      </a>
    </div>
  );
}