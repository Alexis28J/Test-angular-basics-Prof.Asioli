import { Component, inject, signal, WritableSignal } from '@angular/core';
import { SpellService } from '../../../services/spell-service/spell-service';
import { Spell } from '../../../model/spell';

@Component({
  selector: 'app-list-component',
  imports: [],
  templateUrl: './list-component.html',
  styleUrl: './list-component.scss',
})
export class ListComponent {
  
  spellServ = inject(SpellService);

  spells: WritableSignal<Spell[]> = signal([]);

  constructor(){
    this.spellServ.getAllSpells().then(data => 
      this.spells.set(data)
    );
  }

}
