import { fromEvent, Observable, from, of, Subject } from 'rxjs';
import { mapTo, scan } from 'rxjs/operators';

// fromEvent(document, 'click')
//   .pipe(
//     mapTo(1), // eventオブジェクトを1に変換
//     scan((count, click) => count + click, 0) // countに1を加算。countの初期値は0
//   )
//   .subscribe(event => {
//     console.log(event);
//   });

// const observable = new Observable(subscriber => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
// });

// observable.subscribe(x => {
//   console.log(x);
// });

const observable2 = from([1, 2, 3]);
// observable2.subscribe(v => console.log(v));

// const observable3 = of(1, 2, 3);
// observable3.subscribe(v => console.log(v));

const subject = new Subject<number>();

subject.subscribe(v => console.log(`observerA: ${v}`));
subject.subscribe(v => console.log(`observerB: ${v}`));

observable2.subscribe(subject);
