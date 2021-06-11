class SlingShot{
    constructor(bA,bB){
        var options={
            bodyA:bA,
            pointB:bB,
            length:1,
            stiffness:0.4,
        }
        this.slingshot=Constraint.create(options);
        World.add(world,this.slingshot);
    }
    fly(){
        this.slingshot.bodyA=null;
    
    }
    
    attach(body){
        this.slingshot.bodyA=body;
    }
    display(){
        if(this.slingshot.bodyA){
        var pa=this.slingshot.bodyA.position;
        var pb=this.slingshot.pointB;
            
        strokeWeight(3);
        line(pa.x,pa.y,pb.x,pb.y)
        }
        
    }

}