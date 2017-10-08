# Placeholder

## TODO

* Add routes
    * Header, Footer, Nav always visible
    * Home, etc. route-dependent

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