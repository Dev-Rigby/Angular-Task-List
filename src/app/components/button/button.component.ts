import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter();
  constructor(private uiService: UiService) {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }
}
