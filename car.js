AFRAME.registerComponent('base',{
    schema:{
        radius:{type:'number',default:150},
        height:{type:'number',default:3}
    },
    init:function(){
        this.el.setAttribute("geometry",{primitive:'cylinder',radius:this.data.radius,height:this.data.height})
        this.el.setAttribute("material",{color:'yellow'})
    }
})
AFRAME.registerComponent('carmodel',{

    schema:{
        modelref:{type:'string',default:'../car/scene.gltf'}
    },
    init:function(){
        this.el.setAttribute("gltf-model",this.data.modelref)
        const position = {x:0,y:50,z:80}
        const rotation = {x:0,y:-100,z:0}
        this.el.setAttribute('position',position)
        this.el.setAttribute("rotation",rotation)
    }
})