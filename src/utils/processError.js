import { useQuasar } from 'quasar';

export function useErrorHandler() {
  const $q = useQuasar();

  const processErrors = (errors, field = "") => {
    if (Array.isArray(errors)) {
      const joinedMessage = errors.join(" ");
      if (field !== "non_field_errors") {
        $q.notify({
          type: 'negative',
          message: `${field}: ${joinedMessage}`,
          position: 'top'
        });
      } else {
        $q.notify({
          type: 'negative',
          message: joinedMessage,
          position: 'top'
        });
      }
    } 
    else if (typeof errors === "object" && errors !== null) {
      Object.entries(errors).forEach(([key, value]) => {
        const newField = field ? `${field}.${key}` : key;
        processErrors(value, newField);
      });
    }
    else if (typeof errors === "string") {
      $q.notify({
        type: 'negative',
        message: errors.slice(0, 150), // Limit message length
        position: 'top'
      });
    }
    else {
      // Fallback for unknown error format
      $q.notify({
        type: 'negative',
        message: 'An unknown error occurred',
        position: 'top'
      });
    }
  };

  return { processErrors };
}