import stringToNumeric from '@cityssm/string-to-numeric'

function treat_exp(raw_v: string): number {
    let calculated_value: number;
    if (raw_v.indexOf("*") !== -1) {
        let parts = raw_v.split("*");
        let base_value = stringToNumeric(parts[0]);
        let exponent = parts[1];
        let exp_parts = exponent.split("^");
        let power = stringToNumeric(exp_parts[1])
        let exponent_value = 10**power;

        calculated_value = base_value * exponent_value;
    } else {
        calculated_value = stringToNumeric(raw_v);
    }
    return calculated_value;
};

export function voltage(raw_r:string, raw_i:string): number {
    let v: number;
    let r: number;
    let i: number;

    r = treat_exp(raw_r);
    i = treat_exp(raw_i)
    v = r * i;
    if (isNaN(v)) {
        v = 0;
    }
    return v;
};

export function amperage(raw_v:string, raw_r:string): number {
    let v: number;
    let r: number;
    let a: number;

    v = treat_exp(raw_v);
    r = treat_exp(raw_r);
    a = v / r;
    if (isNaN(a)) {
        a = 0;
    }
    return a;
};

export function resistance(raw_v:string, raw_i:string): number {
    let v: number;
    let i: number;
    let r: number;

    v = treat_exp(raw_v);
    i = treat_exp(raw_i);
    r = v / i;
    if (isNaN(r)) {
        r = 0;
    }
    return r;
};

export function section(raw_diameter: string): number {
    let diameter: number;
    let gauge: number;

    diameter = treat_exp(raw_diameter);
    gauge = Math.PI * Math.pow(diameter, 2) / 4;
    if (isNaN(gauge)) {
        gauge = 0;
    }
    return gauge;
};

export function resistivity(raw_r:string, raw_gauge:string, raw_l:string): number {
    let r: number;
    let gauge: number;
    let l: number;
    let rho: number;

    r = treat_exp(raw_r);
    gauge = treat_exp(raw_gauge);
    l = treat_exp(raw_l);
    rho = (r * gauge) / l;
    if (isNaN(rho)) {
        rho = 0;
    }
    return rho;
};

export function rhosistance(raw_rho:string, raw_gauge:string, raw_l:string): number {
    let gauge: number;
    let l: number;
    let rho: number;
    let r: number;

    gauge = treat_exp(raw_gauge);
    l = treat_exp(raw_l);
    rho = treat_exp(raw_rho);
    r = (rho * l) / gauge;
    if (isNaN(r)) {
        r = 0;
    }
    return r;
};

export function parallel_resistor(r_list: string[]): number {
    let r_total: number;

    r_total = 0;
    if (r_list.length === 0) {
        return 0;
    } else if (r_list.length === 1) {
        return treat_exp(r_list[0]);
    } else {
        for (let i = 0; i < r_list.length; i++) {
            r_total += 1 / treat_exp(r_list[i]);
        }
        r_total = 1 / r_total;
        if (isNaN(r_total)) {
            r_total = 0;
        }
        return r_total;
    }
};

export function serial_resistor(r_list: string[]): number {
    let r_total: number;

    r_total = 0;
    if (r_list.length > 1) {
        for (let i = 0; i < r_list.length; i++) {
            r_total += treat_exp(r_list[i]);
        }
    } else {
        r_total = treat_exp(r_list[0]);
    }
    if (isNaN(r_total)) {
        r_total = 0;
    }
    return r_total;
};