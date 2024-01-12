import { FormControl } from "@angular/forms";

export interface User {
    id: number;
    nom: string;
    password: string;
    email: string;
}

export interface UserForm {
    nom: FormControl<string | null>;
    password: FormControl<string | null>;
    email: FormControl<string | null>;
}
