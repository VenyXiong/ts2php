FunctionDeclaration
======

## FunctionDeclaration

```ts
function aaa(a: string, b: string, c: string = undefined) {
    const d = 123;
    const e = b + 123;
    return `1${a}2${e}3${c}4${d}`;
}

aaa('1', '2', '3');

const bbb = (x: string) => "222";

bbb("1");

const a = {
    b() {
        return "111";
    }
};

const b = {
    b: function () {
        return "111";
    }
};

const c = {
    b: () => {
        return "111";
    }
};

c.b();

if (b) {
    bbb('');
}
```

```php
function aaa($a, $b, $c = null) {
    $d = 123;
    $e = $b . 123;
    return "1" . $a . "2" . $e . "3" . $c . "4" . $d;
}
aaa("1", "2", "3");
$bbb = function ($x){
return "222";
};
$bbb("1");
$a = array(
    "b" => function () {
        return "111";
    }
);
$b = array(
    "b" => function () {
        return "111";
    }
);
$c = array(
    "b" => function () {
        return "111";
    }
);
$c["b"]();
if ($b) {
    $bbb("");
}
```