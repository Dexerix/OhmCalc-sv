let raw_r: string;
let raw_v: string;
let raw_i: string;
let raw_diameter: string;
let raw_gauge: string;
let raw_l: string;
let raw_rho: string;
let r: number;
let v: number;
let i: number;
let diameter: number;
let gauge: number;
let l: number;
let rho: number;
let r_list: string[];
let r_total: number;

function treat_exp(raw_v: string): number {
    let calculated_value: number;
    if (raw_v.indexOf("*") !== -1) {
        let parts = raw_v.split("*");
        let base_value = parseFloat(parts[0]);
        let exponent = parts[1];
        let exp_parts = exponent.split("^");
        let power = parseInt(exp_parts[1])
        let exponent_value = 10**power;

        calculated_value = base_value * exponent_value;
    } else {
        calculated_value = parseFloat(raw_v);
    }
    return calculated_value;
};

export function voltage(raw_r:string, raw_i:string): number {
    r = treat_exp(raw_r);
    i = treat_exp(raw_i)
    v = r * i;
    return v;
};

export function amperage(raw_v:string, raw_r:string): number {
    v = treat_exp(raw_v);
    r = treat_exp(raw_r);
    let a = v / r;
    return a;
};

export function resistance(raw_v:string, raw_i:string): number {
    v = treat_exp(raw_v);
    i = treat_exp(raw_i);
    let r = v / i;
    return r;
};

export function section(raw_diameter: string): number {
    diameter = treat_exp(raw_diameter);
    gauge = Math.round((Math.PI * Math.pow(diameter, 2) / 4) * 100) / 100;
    return gauge;
};

export function resistivity(raw_r:string, raw_gauge:string, raw_l:string): number {
    r = treat_exp(raw_r);
    gauge = treat_exp(raw_gauge);
    l = treat_exp(raw_l);
    let rho = (r * gauge) / l;
    return rho;
};

export function rhosistence(raw_rho:string, raw_gauge:string, raw_l:string): number {
    gauge = treat_exp(raw_gauge);
    l = treat_exp(raw_l);
    rho = treat_exp(raw_rho);
    r = (rho * l) / gauge;
    return r;
};

export function parallel_resistor(r_list: string[]): number {
    r_total = 0;
    if (r_list.length === 0) {
        return 0;
    } else if (r_list.length === 1) {
        return treat_exp(r_list[0]);
    } else {
        for (let i = 0; i < r_list.length; i++) {
            r_total += 1 / treat_exp(r_list[i]);
        }
        return 1 / r_total;
    }
};

export function serial_resistor(r_list: string[]): number {
    r_total = 0;
    if (r_list.length > 1) {
        for (let i = 0; i < r_list.length; i++) {
            r_total += treat_exp(r_list[i]);
        }
    } else {
        r_total = treat_exp(r_list[0]);
    }
    return r_total;
};