import { useToggle } from 'react-use'

export const useExample = () => {
    const [value, setValue] = useToggle<boolean>(false)
    return [{ value }, { setValue}]
}

export default useExample

