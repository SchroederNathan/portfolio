
interface Props {
    tags?: string[],
}

const TechChip: React.FC<Props> = ({ tags }) => {
    return (
        tags!.map((tag: string, index: number) => (
            <li className='mr-1.5 mt-2' key={index}>
                <div className='flex items-center rounded-full bg-teal-300/10 px-3 py-1 text-xs font-medium leading-5 text-teal-200 '>{tag}</div>
            </li>
        ))
    );
}

export default TechChip