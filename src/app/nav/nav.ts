import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

interface NavItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  templateUrl: './nav.html',
  styleUrls: ['./nav.css'],
})
export class Nav implements OnInit {
  navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'domki', label: 'Domki' },
    { id: 'udogodnienia', label: 'Udogodnienia' },
    { id: 'zdjecia', label: 'Zdjęcia' },
    // { id: 'atrakcje', label: 'Atrakcje' },
    // { id: 'opinie', label: 'Opinie' },
    { id: 'kontakt', label: 'Kontakt' },
  ];

  isMenuOpen = false;
  activeId: string | null = null;

  ngOnInit(): void {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  goTo(id: string, event?: Event): void {
    if (event) event.preventDefault();

    const el = document.getElementById(id);
    if (!el) return;

    const offset = window.innerHeight * 0.03;
    const elementTop = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: elementTop, behavior: 'smooth' });

    setTimeout(() => {
      el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
    }, 500);

    this.closeMenu();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const buffer = window.innerHeight * 0.3;
    let current: string | null = null;

    for (const item of this.navItems) {
      const el = document.getElementById(item.id);
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      if (rect.top <= buffer && rect.bottom > buffer) {
        current = item.id;
        break;
      }

      if (rect.top >= 0 && rect.top < window.innerHeight * 0.15) {
        current = item.id;
        break;
      }
    }

    this.activeId = current;
  }
}
