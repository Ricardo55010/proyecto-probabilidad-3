function calcular() {
  const por=0.05;
  const npor=0.95;
  const n1 = parseInt(document.querySelector('#n11').value);
  const n2 = parseInt(document.querySelector('#n22').value);
  const n3= n1-n2;
  let x=n1-1;
  let k=n2-1;
  let xk=x-k;
  let num = 1;
  let den1 = 1;
  let den2 = 1;
  let rt
  let r;
  if(n1>=n2){
    if(n1==0||n2==0){
      r="";
    }
    else{
      while(x>0){
        num=num*x;
        x--;
      }
      while(k>0){
        den1=den1*k;
        k--;
      }
      while(xk>0){
        den2=den2*xk;
        xk--;
      }
      rt=((num/(den1*den2)))*(Math.pow(por,n2))*(Math.pow(npor,n3))*100;
      r=rt.toString()+"%";
    }
  }
  else{
    r="No es posible realizar la distribución dado que r no puede ser mayor a x";
  }
  document.querySelector('#r2').innerHTML = r;

}
