export default ({ store, redirect }) => {
    console.log("this is middleware");

    return redirect('/home');
}