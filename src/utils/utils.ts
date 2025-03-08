import {toast} from 'bulma-toast';

export function showSuccessToast(message: string): void {
    toast({
        message: message,
        type: 'is-success',
        dismissible: true,
        pauseOnHover: true,
        duration: 4000,
        single: true,
    });
}

export function showErrorToast(message: string): void {
    toast({
        message: message,
        type: 'is-danger',
        dismissible: true,
        pauseOnHover: true,
        duration: 4000,
        single: true,
    });
}