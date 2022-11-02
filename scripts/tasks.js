class taskinator {
    constructor(t_name = '', t_desc, t_finished, t_fave, t_start, t_end) {
        this.name = t_name;
        this.description = t_desc;
        this.finished = t_finished;
        this.fave = t_fave;
        this.start_date = t_start;
        this.end_date = t_end;
        this.id = create_UUID();
    }
}

var tasks = [];