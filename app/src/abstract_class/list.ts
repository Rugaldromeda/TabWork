
export abstract class List<L> {
    
    private listItens:L[] = [];
    
    add(item:L) {
        
        this.listItens.push(item);
    }
    
    get list() {
        
        return this.listItens;
    }
}