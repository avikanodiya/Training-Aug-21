/ namespace PfCalc {
//     export function calc<T>(salary: T): T {
//         return salary / 0.10
//     }
// }
var PfCalc;
(function (PfCalc) {
    function calc(name, salary) {
        return salary / 0.10;
    }
    PfCalc.calc = calc;
})(PfCalc || (PfCalc = {}));
