export default () => {

    const date = new Date();
    const year = date.getFullYear();

    return <footer className="row">
        <div className="col-12 text-center">
            <p>ReactivePoker.com &copy; {year}</p>
        </div>
    </footer>
}