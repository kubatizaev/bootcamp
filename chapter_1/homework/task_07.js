var drinks = prompt('Введите напиток');
switch(drinks) {
    case 'vodka':
    case 'beer': alert('Употребление алкоголя вредит Вашему здоровью')
    break;
    case 'coffee': alert('Кофеин вредит Вашему здоровью')
    break;
    case 'milk': alert('Полезно Вашему здоровью')
    break;
    default: alert('Ошибка')
}