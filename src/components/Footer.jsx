export default function Footer() {
    return(
        <div className="text-center py-3 border-top fw-semibold">
            {(new Date()).getFullYear()}
        </div>
    );
}