# Placeholder

[**Live Demo**](https://shutupandwrite247.firebaseapp.com/)

## TODO

* [x] Add routes
    * [x] Header, Footer, Nav always visible
    * [x] Home, etc. route-dependent
* [ ] Now
    * [ ] Form
* [ ] Today
* [ ] Week
    * [ ] Visualizations

Will look like:

```javascript
<Router>
  <div>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/user/:userId" component={UserPage}/>
      <Route exact path={notFoundCode} component={NotFound}/>
      <Route404/>
    </Switch>
    <Footer/>
  </div>
</Router>
```