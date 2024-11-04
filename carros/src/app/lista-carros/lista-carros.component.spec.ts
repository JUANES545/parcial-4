import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaCarrosComponent } from './lista-carros.component';
import { CarroService } from './lista-carros.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListaCarrosComponent', () => {
  let component: ListaCarrosComponent;
  let fixture: ComponentFixture<ListaCarrosComponent>;
  let cafeService: CarroService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CarroService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListaCarrosComponent);
    component = fixture.componentInstance;
    cafeService = TestBed.inject(CarroService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a table with three rows and a header', () => {
    const mockCafes = [
      {
        "id": 1,
        "marca": "Renault",
        "linea": "Kangoo",
        "referencia": "VU Express",
        "modelo": 2017,
        "kilometraje": 93272,
        "color": "Blanco",
        "imagen": "https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg"
      },
      {
        "id": 2,
        "marca": "Chevrolet",
        "linea": "Spark",
        "referencia": "Life",
        "modelo": 2018,
        "kilometraje": 55926,
        "color": "Plata",
        "imagen": "https://turistran.com/2-thickbox_default/chevrolet-spark-life.jpg"
      },
      {
        "id": 3,
        "marca": "Chevrolet",
        "linea": "Sail",
        "referencia": "LT Sedan",
        "modelo": 2016,
        "kilometraje": 94321,
        "color": "Rojo",
        "imagen": "https://www.chevrolet.com.ec/content/dam/chevrolet/south-america/ecuador/espanol/index/cars/2019-sail/mov/01-images/2018-chevrolet-sail-rojo-01.png"
      }
    ]

    spyOn(cafeService, 'getCarros').and.returnValue(of(mockCafes));
    component.ngOnInit();
    fixture.detectChanges();

    //Valido que se cree correctamente la fila del encabezado
    const headerRow = fixture.nativeElement.querySelectorAll('thead tr');
    expect(headerRow.length).toBe(1);

    //Valido que se cree correctamente la fila del body
    const tableRows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(tableRows.length).toBe(3);

  });
});
