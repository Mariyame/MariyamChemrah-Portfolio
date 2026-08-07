type HeadingProps = {
    title: string;
    subtitle: string;
};
export default function Heading({ title, subtitle }: HeadingProps) {
    return (
        <div className="sm:text-center mb-8">
            <h2 className="text-label font-bold mb-4">{title}</h2>
            <p className="text-3xl mb-8 hidden sm:block">{subtitle}</p>   
        </div>

    );
}