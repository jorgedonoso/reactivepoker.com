const Title = ({ children }) =>
    <>
        <h1 className="display-4 text-center my-2 d-md-none">
            {children}
        </h1>
        <h1 className="display-1 text-center my-4 d-none d-md-block">
            {children}
        </h1>
    </>
export default Title