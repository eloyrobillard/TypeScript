const foo = () => {}
// foo = () => {}
let fc = foo();
let fc0 = foo -< foo;
let fc1 = foo -< foo -< foo;
// let p: void = foo <| 1;
// let py: void = foo(1) <| 2;
// let pyy: void = foo(1) <| foo();
// let p1: void = foo(1) <| foo() <| foo();
// let p2: void = foo(1) <| foo <| foo();
// let p3: void = foo <| foo <| foo();
// let p4: void = foo <| foo <| 1;
// let p5: void = foo <| foo <| 1+2;

// let pr: void = 1 |> foo;
// let pry: void = 2 |> foo(1);
// let pryy: void = foo() |> foo(1);
// let pr1: void = foo() |> foo() |> foo(1);
// let pr2: void = foo() |> foo |> foo(1);
// let pr3: void = foo() |> foo |> foo;
// let pr4: void = 1 |> foo |> foo;
// let pr5: void = 1+2 |> foo |> foo;
// let pr6: void = 1+2 |> foo(1) |> foo(3);

// let e1: void = 1+2 |> 1;