import { useToggle } from 'react-use'

export const useExample = () => {
    const [value, setValue] = useToggle(false)
    return [{ value }, { setValue}]
}

export default useExample

