export function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export function validateName(name: string) {
  const re = /^[a-zA-Z\s]+$/;
  return re.test(String(name));
}

export function validateCity(city: string) {
  const re = /^[a-zA-Z\s]+$/;
  return re.test(String(city));
}

export function validateState(state: string) {
  const re = /^[a-zA-Z\s]+$/;
  return re.test(String(state));
}

export function validateVenue(venue: string) {
  const re = /^[a-zA-Z\s]+$/;
  return re.test(String(venue));
}

export function validateOtherActs(otherActs: string) {
  const re = /^[a-zA-Z\s]+$/;
  return re.test(String(otherActs));
}

export function validatePerformanceDate(performanceDate: Date) {
  const now = new Date();
  return performanceDate > now;
}
 
export function validatePlaceToCrash(placeToCrash: string) {
  const re = /^[a-zA-Z\s]+$/;
  return re.test(String(placeToCrash));
}
export function validateMessage(message: string) {
  const trimmed = message.trim();
  // Must contain at least one alphanumeric character
  return trimmed.length > 0 && /[a-zA-Z0-9]/.test(trimmed);
}
export function validatePhone(phone: string) {
  if (!phone.trim()) {
    return false;
  }
  const re =
    /^(?:\+1\s?|001\s?)?(?:\(\d{3}\)\s?|\d{3}[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
  return re.test(String(phone));
}
export function validateContactForm(
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  message: string
) {
  return (
    validateName(firstName) &&
    validateName(lastName) &&
    validateEmail(email) &&
    validatePhone(phone) &&
    validateMessage(message)
  );
}

export const validateShowRequestForm = (
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  city: string,
  state: string,
  venue: string,
  otherActs: string,
  performanceDate: Date,
  placeToCrash: string,
  message: string
) => {
  return (
    validateName(firstName) &&
    validateName(lastName) &&
    validateEmail(email) &&
    validatePhone(phone) &&
    validateCity(city) &&
    validateState(state) &&
    validateVenue(venue) &&
    validateOtherActs(otherActs) &&
    validatePerformanceDate(performanceDate) &&
    validatePlaceToCrash(placeToCrash) &&
    validateMessage(message)
  );
};

export const formatDate = (date: Date | string | undefined) => {
  if (!date) {
    return "";
  }
  
  // If it's already a Date, use it directly
  if (date instanceof Date) {
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  
  // If it's a string, parse it
  const [year, month, day] = date.split("-").map(Number);
  const dateObj = new Date(year, month - 1, day);
  return dateObj.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export function delayPageLoad(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function delayComponentLoad(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}