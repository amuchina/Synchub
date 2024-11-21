import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from "@inertiajs/react";
import { PageProps } from '@/types';

export default function All({ auth }: PageProps<{}>) {
    return(
        <AuthenticatedLayout
            user={auth.user}
            currentPage={'threads'}
        >
            <Head title="Threads" />

            

        </AuthenticatedLayout>
    );
}
