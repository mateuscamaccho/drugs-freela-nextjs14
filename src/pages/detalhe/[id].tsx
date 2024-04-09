import { useRouter } from 'next/router';
export default function DetalhePage() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div className="container-fluid h-1/5 bg-red-600" style={{ backgroundColor: `red` }}>
            {id}
        </div>
    );
}

