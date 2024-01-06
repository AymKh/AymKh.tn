import { Spinner } from '@nextui-org/react'

export const LoadingFallback = () => {
    return (
        <div className=" w-screen h-screen flex flex-col justify-center items-center">
            <Spinner
                size="md"
                label="Loading..."
            />
        </div>
    )
}