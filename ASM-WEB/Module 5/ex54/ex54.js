
        function findmax() {
            let aval = document.getElementById("ida").value;
            let bval = document.getElementById("idb").value;
            let cval = document.getElementById("idc").value;
            let max = aval; 
            if (aval <= bval && bval >= cval) {
                max = bval;
            }
            else if (aval <= cval && cval >= bval) {
                max = cval;
            }
            console.log(max);
            idrs.innerHTML = max;
            return max; 
        }

        function findmin() {
            let aval = document.getElementById("ida").value;
            let bval = document.getElementById("idb").value;
            let cval = document.getElementById("idc").value;
            let min = aval; 
            if (aval >= bval && bval <= cval) {
                min = bval;
            }
            else if (aval >= cval && cval <= bval) {
                min = cval;
            }
            console.log(min);
            idrs.innerHTML = min;
            return min; 
        }

        function culsina() {
            let aval = document.getElementById("ida").value;
            result = Math.sin(aval)
            idrs.innerHTML=result
        }

        function culcosa() {
            let aval = document.getElementById("ida").value;
            result = Math.cos(aval)
            idrs.innerHTML=result
        }

        function square() {
            let aval = document.getElementById("ida").value;
            let bval = document.getElementById("idb").value;
            result = Math.pow(aval, bval)
            idrs.innerHTML=result
        }
