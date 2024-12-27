import * as enums from '../components/utils/enums/Tarefa';

export default class Tarefa {
    titulo: string;
    prioridade: enums.Prioridade;
    status: enums.Status;
    descricao: string;
    id: number;
    constructor(titulo: string, prioridade: enums.Prioridade, status: enums.Status, descricao: string, id: number) {
        this.titulo = titulo;
        this.prioridade = prioridade;
        this.status = status;
        this.descricao = descricao;
        this.id = id;
    }
}